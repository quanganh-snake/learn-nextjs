// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer()

export const config = {
    api: {
        bodyParser: false,
    },
}

type Data = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'Method not supported!' })
    }

    return new Promise((resolve) => {
        req.headers.cookie = ''

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = '';
            // Data đang được API trả về = streaming data
            proxyRes.on('data', function (chunk) {
                body += chunk
            })

            // Data đã được xử lý xong
            proxyRes.on('end', function () {
                try {
                    const { accessToken, expiredAt } = JSON.parse(body)
                    // Convert Token to Cookies
                    const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV === 'production' })

                    cookies.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expiredAt)
                    })
                        ; (res as NextApiResponse).status(200).json({
                            message: 'Login successfully!'
                        })
                } catch (error) {
                    ; (res as NextApiResponse).status(500).json({
                        message: 'Something went wrong!'
                    })
                }
                resolve(true)
            })
        }

        proxy.once('proxyRes', handleLoginResponse)

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true, // selfHandleResponse: true: res trả về thì mình tự handle trả về response
        })
    })
}
