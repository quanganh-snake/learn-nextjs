// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name?: string,
    error?: string,
    data?: any[],
    message?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'GET') {
        return res.status(404).json({ error: 'Method not supported!' })
    }

    const response = await fetch('https://dummyjson.com/products')
    const resJSON = await response.json()

    res.status(200).json({
        data: resJSON?.products,
        message: 'GET ALL PRODUCTS LIST'
    })
}
