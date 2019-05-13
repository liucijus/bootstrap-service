import * as Long from 'long';

declare namespace wrapper {
    export namespace com {
        export namespace wixpress {
            export namespace somethingtoplatform {
                export namespace node {
                    export namespace proto {
                        export abstract class TodoService {
                            abstract getTodos(aspects: object, req: wrapper.com.wixpress.somethingtoplatform.node.proto.Empty): Promise<wrapper.com.wixpress.somethingtoplatform.node.proto.TodoList>
                            abstract postTodo(aspects: object, req: wrapper.com.wixpress.somethingtoplatform.node.proto.Todo): Promise<wrapper.com.wixpress.somethingtoplatform.node.proto.PostTodoResponse>
                        }
                        export interface Empty {
                        }
                        export interface Todo {
                            description?: (string | null);
                        }
                        export interface TodoList {
                            todoList?: (wrapper.com.wixpress.somethingtoplatform.node.proto.Todo[] | null);
                        }
                        export interface PostTodoResponse {
                            status?: (string | null);
                        }
                    }
                }
            }
        }
    }
    export namespace google {
        export namespace api {
            export interface Http {
                rules?: (wrapper.google.api.HttpRule[] | null);
            }
            export interface HttpRule {
                selector?: (string | null);
                get?: (string | null);
                put?: (string | null);
                post?: (string | null);
                delete?: (string | null);
                patch?: (string | null);
                custom?: (wrapper.google.api.CustomHttpPattern | null);
                body?: (string | null);
                additionalBindings?: (wrapper.google.api.HttpRule[] | null);
            }
            export interface CustomHttpPattern {
                kind?: (string | null);
                path?: (string | null);
            }
        }
    }
    export namespace wix {
        export namespace api {
            export enum Format {
                EMAIL = 0,
                HOSTNAME = 1,
                IPV4 = 2,
                IPV6 = 3,
                URI = 4,
                PHONE = 7,
                CREDIT_CARD = 8,
                GUID = 9,
                COUNTRY = 10,
                LANGUAGE = 11,
                DECIMAL_VALUE = 12,
                CURRENCY = 13,
            }
        }
    }
}

export = wrapper;
