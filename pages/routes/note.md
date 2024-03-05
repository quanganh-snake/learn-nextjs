# NextJS - File-system Routing

1.  Pre-defined route: Định nghĩa file/folder = 1 route

    -   EX:

    *   pages/file = /file
    *   folder/file = /folder/file

2.  Dynamic routes

    2.1. Single parameter: **pages/posts/[parameter].tsx**

        - EX: pages/posts/[postId].tsx -> Match: /posts/123

    2.2. Multiple parameter:

    -   EX:

    **pages/categories/[categoryId]/posts/[postId].tsx**

    2.3. Catch all routes: match tất cả các tầng, nhưng không match index của folder cha

    -   Form: pages/posts/[...slug].tsx

    -> Match:

        + /posts/123

        + /posts/list-post

        + /posts/list/item

        + /posts/list/item/123

    2.4. Optional catch all routes: **pages/posts/[[...slug]].tsx**

    -> Match: tất cả các tầng và index của folder cha

3.  Route match order

-   Mức độ ưu tiên

    3.1. Pre-defined routes (\*)

    3.2. Dynamic routes (\*\*)

    3.3. Catch all routes (\*\*\*)

4. Lưu ý

    - Nếu dùng **Catch all routes** thì thôi dùng **Option catch all routes**
