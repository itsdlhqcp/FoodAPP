import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Main />
        },
    ]
);

export default router;