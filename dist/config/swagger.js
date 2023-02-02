"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'openapi': '3.0.n',
    'info': {
        'version': '1.0.0',
        'title': '會員管理',
        'description': '會員管理 API'
    },
    'tags': [
        {
            'name': '權限',
            'description': '權限相關'
        }
    ],
    'consumes': [
        'application/json'
    ],
    'produces': [
        'application/json'
    ],
    'paths': {
        '/user/login': {
            'post': {
                'tags': [
                    '權限'
                ],
                'summary': '登入',
                'requestBody': {
                    'description': '登入',
                    'required': true,
                    'content': {
                        'application/json': {
                            'schema': {
                                '$ref': '#/definitions/LoginReq'
                            }
                        }
                    },
                },
                'produces': ['application/json'],
                'responses': {
                    '200': {
                        'description': '登入成功',
                    },
                    '401': {
                        'description': '帳號或密碼錯誤',
                    }
                }
            }
        }
    },
    'definitions': {
        'LoginReq': {
            'type': 'object',
            'properties': {
                'username': {
                    'type': 'string'
                },
                'password': {
                    'type': 'string'
                }
            }
        },
        'LoginRes': {}
    }
};
