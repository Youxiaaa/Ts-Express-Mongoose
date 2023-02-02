declare const _default: {
    openapi: string;
    info: {
        version: string;
        title: string;
        description: string;
    };
    tags: {
        name: string;
        description: string;
    }[];
    consumes: string[];
    produces: string[];
    paths: {
        '/user/login': {
            post: {
                tags: string[];
                summary: string;
                requestBody: {
                    description: string;
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                produces: string[];
                responses: {
                    '200': {
                        description: string;
                    };
                    '401': {
                        description: string;
                    };
                };
            };
        };
    };
    definitions: {
        LoginReq: {
            type: string;
            properties: {
                username: {
                    type: string;
                };
                password: {
                    type: string;
                };
            };
        };
        LoginRes: {};
    };
};
export default _default;
