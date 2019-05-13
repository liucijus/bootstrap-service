const Long = require('long');

const $root = {};

(
$root.__options = {
  'stringEnums': false
});
$root.__lookup = function(pbjs) {
  const root = pbjs.Root.fromJSON({
    'nested': {
      'com': {
        'nested': {
          'wixpress': {
            'nested': {
              'somethingtoplatform': {
                'nested': {
                  'node': {
                    'nested': {
                      'proto': {
                        'nested': {
                          'TodoService': {
                            'methods': {
                              'GetTodos': {
                                'requestType': 'Empty',
                                'responseType': 'TodoList',
                                'options': {
                                  '(google.api.http).get': '/todos'
                                }
                              },
                              'PostTodo': {
                                'requestType': 'Todo',
                                'responseType': 'PostTodoResponse',
                                'options': {
                                  '(google.api.http).post': '/todo'
                                }
                              }
                            }
                          },
                          'Empty': {
                            'fields': {}
                          },
                          'Todo': {
                            'fields': {
                              'description': {
                                'type': 'string',
                                'id': 1
                              }
                            }
                          },
                          'TodoList': {
                            'fields': {
                              'todoList': {
                                'rule': 'repeated',
                                'type': 'Todo',
                                'id': 1
                              }
                            }
                          },
                          'PostTodoResponse': {
                            'fields': {
                              'status': {
                                'type': 'string',
                                'id': 1
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      'google': {
        'nested': {
          'protobuf': {
            'options': {
              'go_package': 'github.com/golang/protobuf/protoc-gen-go/descriptor;descriptor',
              'java_package': 'com.google.protobuf',
              'java_outer_classname': 'DescriptorProtos',
              'csharp_namespace': 'Google.Protobuf.Reflection',
              'objc_class_prefix': 'GPB',
              'cc_enable_arenas': true,
              'optimize_for': 'SPEED'
            },
            'nested': {
              'Empty': {
                'fields': {}
              },
              'FileDescriptorSet': {
                'fields': {
                  'file': {
                    'rule': 'repeated',
                    'type': 'FileDescriptorProto',
                    'id': 1
                  }
                }
              },
              'FileDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'package': {
                    'type': 'string',
                    'id': 2
                  },
                  'dependency': {
                    'rule': 'repeated',
                    'type': 'string',
                    'id': 3
                  },
                  'publicDependency': {
                    'rule': 'repeated',
                    'type': 'int32',
                    'id': 10,
                    'options': {
                      'packed': false
                    }
                  },
                  'weakDependency': {
                    'rule': 'repeated',
                    'type': 'int32',
                    'id': 11,
                    'options': {
                      'packed': false
                    }
                  },
                  'messageType': {
                    'rule': 'repeated',
                    'type': 'DescriptorProto',
                    'id': 4
                  },
                  'enumType': {
                    'rule': 'repeated',
                    'type': 'EnumDescriptorProto',
                    'id': 5
                  },
                  'service': {
                    'rule': 'repeated',
                    'type': 'ServiceDescriptorProto',
                    'id': 6
                  },
                  'extension': {
                    'rule': 'repeated',
                    'type': 'FieldDescriptorProto',
                    'id': 7
                  },
                  'options': {
                    'type': 'FileOptions',
                    'id': 8
                  },
                  'sourceCodeInfo': {
                    'type': 'SourceCodeInfo',
                    'id': 9
                  },
                  'syntax': {
                    'type': 'string',
                    'id': 12
                  }
                }
              },
              'DescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'field': {
                    'rule': 'repeated',
                    'type': 'FieldDescriptorProto',
                    'id': 2
                  },
                  'extension': {
                    'rule': 'repeated',
                    'type': 'FieldDescriptorProto',
                    'id': 6
                  },
                  'nestedType': {
                    'rule': 'repeated',
                    'type': 'DescriptorProto',
                    'id': 3
                  },
                  'enumType': {
                    'rule': 'repeated',
                    'type': 'EnumDescriptorProto',
                    'id': 4
                  },
                  'extensionRange': {
                    'rule': 'repeated',
                    'type': 'ExtensionRange',
                    'id': 5
                  },
                  'oneofDecl': {
                    'rule': 'repeated',
                    'type': 'OneofDescriptorProto',
                    'id': 8
                  },
                  'options': {
                    'type': 'MessageOptions',
                    'id': 7
                  },
                  'reservedRange': {
                    'rule': 'repeated',
                    'type': 'ReservedRange',
                    'id': 9
                  },
                  'reservedName': {
                    'rule': 'repeated',
                    'type': 'string',
                    'id': 10
                  }
                },
                'nested': {
                  'ExtensionRange': {
                    'fields': {
                      'start': {
                        'type': 'int32',
                        'id': 1
                      },
                      'end': {
                        'type': 'int32',
                        'id': 2
                      },
                      'options': {
                        'type': 'ExtensionRangeOptions',
                        'id': 3
                      }
                    }
                  },
                  'ReservedRange': {
                    'fields': {
                      'start': {
                        'type': 'int32',
                        'id': 1
                      },
                      'end': {
                        'type': 'int32',
                        'id': 2
                      }
                    }
                  }
                }
              },
              'ExtensionRangeOptions': {
                'fields': {
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'FieldDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'number': {
                    'type': 'int32',
                    'id': 3
                  },
                  'label': {
                    'type': 'Label',
                    'id': 4
                  },
                  'type': {
                    'type': 'Type',
                    'id': 5
                  },
                  'typeName': {
                    'type': 'string',
                    'id': 6
                  },
                  'extendee': {
                    'type': 'string',
                    'id': 2
                  },
                  'defaultValue': {
                    'type': 'string',
                    'id': 7
                  },
                  'oneofIndex': {
                    'type': 'int32',
                    'id': 9
                  },
                  'jsonName': {
                    'type': 'string',
                    'id': 10
                  },
                  'options': {
                    'type': 'FieldOptions',
                    'id': 8
                  }
                },
                'nested': {
                  'Type': {
                    'values': {
                      'TYPE_DOUBLE': 1,
                      'TYPE_FLOAT': 2,
                      'TYPE_INT64': 3,
                      'TYPE_UINT64': 4,
                      'TYPE_INT32': 5,
                      'TYPE_FIXED64': 6,
                      'TYPE_FIXED32': 7,
                      'TYPE_BOOL': 8,
                      'TYPE_STRING': 9,
                      'TYPE_GROUP': 10,
                      'TYPE_MESSAGE': 11,
                      'TYPE_BYTES': 12,
                      'TYPE_UINT32': 13,
                      'TYPE_ENUM': 14,
                      'TYPE_SFIXED32': 15,
                      'TYPE_SFIXED64': 16,
                      'TYPE_SINT32': 17,
                      'TYPE_SINT64': 18
                    }
                  },
                  'Label': {
                    'values': {
                      'LABEL_OPTIONAL': 1,
                      'LABEL_REQUIRED': 2,
                      'LABEL_REPEATED': 3
                    }
                  }
                }
              },
              'OneofDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'options': {
                    'type': 'OneofOptions',
                    'id': 2
                  }
                }
              },
              'EnumDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'value': {
                    'rule': 'repeated',
                    'type': 'EnumValueDescriptorProto',
                    'id': 2
                  },
                  'options': {
                    'type': 'EnumOptions',
                    'id': 3
                  },
                  'reservedRange': {
                    'rule': 'repeated',
                    'type': 'EnumReservedRange',
                    'id': 4
                  },
                  'reservedName': {
                    'rule': 'repeated',
                    'type': 'string',
                    'id': 5
                  }
                },
                'nested': {
                  'EnumReservedRange': {
                    'fields': {
                      'start': {
                        'type': 'int32',
                        'id': 1
                      },
                      'end': {
                        'type': 'int32',
                        'id': 2
                      }
                    }
                  }
                }
              },
              'EnumValueDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'number': {
                    'type': 'int32',
                    'id': 2
                  },
                  'options': {
                    'type': 'EnumValueOptions',
                    'id': 3
                  }
                }
              },
              'ServiceDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'method': {
                    'rule': 'repeated',
                    'type': 'MethodDescriptorProto',
                    'id': 2
                  },
                  'options': {
                    'type': 'ServiceOptions',
                    'id': 3
                  }
                }
              },
              'MethodDescriptorProto': {
                'fields': {
                  'name': {
                    'type': 'string',
                    'id': 1
                  },
                  'inputType': {
                    'type': 'string',
                    'id': 2
                  },
                  'outputType': {
                    'type': 'string',
                    'id': 3
                  },
                  'options': {
                    'type': 'MethodOptions',
                    'id': 4
                  },
                  'clientStreaming': {
                    'type': 'bool',
                    'id': 5,
                    'options': {
                      'default': false
                    }
                  },
                  'serverStreaming': {
                    'type': 'bool',
                    'id': 6,
                    'options': {
                      'default': false
                    }
                  }
                }
              },
              'FileOptions': {
                'fields': {
                  'javaPackage': {
                    'type': 'string',
                    'id': 1
                  },
                  'javaOuterClassname': {
                    'type': 'string',
                    'id': 8
                  },
                  'javaMultipleFiles': {
                    'type': 'bool',
                    'id': 10,
                    'options': {
                      'default': false
                    }
                  },
                  'javaGenerateEqualsAndHash': {
                    'type': 'bool',
                    'id': 20,
                    'options': {
                      'deprecated': true
                    }
                  },
                  'javaStringCheckUtf8': {
                    'type': 'bool',
                    'id': 27,
                    'options': {
                      'default': false
                    }
                  },
                  'optimizeFor': {
                    'type': 'OptimizeMode',
                    'id': 9,
                    'options': {
                      'default': 'SPEED'
                    }
                  },
                  'goPackage': {
                    'type': 'string',
                    'id': 11
                  },
                  'ccGenericServices': {
                    'type': 'bool',
                    'id': 16,
                    'options': {
                      'default': false
                    }
                  },
                  'javaGenericServices': {
                    'type': 'bool',
                    'id': 17,
                    'options': {
                      'default': false
                    }
                  },
                  'pyGenericServices': {
                    'type': 'bool',
                    'id': 18,
                    'options': {
                      'default': false
                    }
                  },
                  'phpGenericServices': {
                    'type': 'bool',
                    'id': 42,
                    'options': {
                      'default': false
                    }
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 23,
                    'options': {
                      'default': false
                    }
                  },
                  'ccEnableArenas': {
                    'type': 'bool',
                    'id': 31,
                    'options': {
                      'default': false
                    }
                  },
                  'objcClassPrefix': {
                    'type': 'string',
                    'id': 36
                  },
                  'csharpNamespace': {
                    'type': 'string',
                    'id': 37
                  },
                  'swiftPrefix': {
                    'type': 'string',
                    'id': 39
                  },
                  'phpClassPrefix': {
                    'type': 'string',
                    'id': 40
                  },
                  'phpNamespace': {
                    'type': 'string',
                    'id': 41
                  },
                  'phpMetadataNamespace': {
                    'type': 'string',
                    'id': 44
                  },
                  'rubyPackage': {
                    'type': 'string',
                    'id': 45
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [[
                  38,
                  38
                ]],
                'nested': {
                  'OptimizeMode': {
                    'values': {
                      'SPEED': 1,
                      'CODE_SIZE': 2,
                      'LITE_RUNTIME': 3
                    }
                  }
                }
              },
              'MessageOptions': {
                'fields': {
                  'messageSetWireFormat': {
                    'type': 'bool',
                    'id': 1,
                    'options': {
                      'default': false
                    }
                  },
                  'noStandardDescriptorAccessor': {
                    'type': 'bool',
                    'id': 2,
                    'options': {
                      'default': false
                    }
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 3,
                    'options': {
                      'default': false
                    }
                  },
                  'mapEntry': {
                    'type': 'bool',
                    'id': 7
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [
                  [
                    8,
                    8
                  ],
                  [
                    9,
                    9
                  ]
                ]
              },
              'FieldOptions': {
                'fields': {
                  'ctype': {
                    'type': 'CType',
                    'id': 1,
                    'options': {
                      'default': 'STRING'
                    }
                  },
                  'packed': {
                    'type': 'bool',
                    'id': 2
                  },
                  'jstype': {
                    'type': 'JSType',
                    'id': 6,
                    'options': {
                      'default': 'JS_NORMAL'
                    }
                  },
                  'lazy': {
                    'type': 'bool',
                    'id': 5,
                    'options': {
                      'default': false
                    }
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 3,
                    'options': {
                      'default': false
                    }
                  },
                  'weak': {
                    'type': 'bool',
                    'id': 10,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [[
                  4,
                  4
                ]],
                'nested': {
                  'CType': {
                    'values': {
                      'STRING': 0,
                      'CORD': 1,
                      'STRING_PIECE': 2
                    }
                  },
                  'JSType': {
                    'values': {
                      'JS_NORMAL': 0,
                      'JS_STRING': 1,
                      'JS_NUMBER': 2
                    }
                  }
                }
              },
              'OneofOptions': {
                'fields': {
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'EnumOptions': {
                'fields': {
                  'allowAlias': {
                    'type': 'bool',
                    'id': 2
                  },
                  'deprecated': {
                    'type': 'bool',
                    'id': 3,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'reserved': [[
                  5,
                  5
                ]]
              },
              'EnumValueOptions': {
                'fields': {
                  'deprecated': {
                    'type': 'bool',
                    'id': 1,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'ServiceOptions': {
                'fields': {
                  'deprecated': {
                    'type': 'bool',
                    'id': 33,
                    'options': {
                      'default': false
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]]
              },
              'MethodOptions': {
                'fields': {
                  'deprecated': {
                    'type': 'bool',
                    'id': 33,
                    'options': {
                      'default': false
                    }
                  },
                  'idempotencyLevel': {
                    'type': 'IdempotencyLevel',
                    'id': 34,
                    'options': {
                      'default': 'IDEMPOTENCY_UNKNOWN'
                    }
                  },
                  'uninterpretedOption': {
                    'rule': 'repeated',
                    'type': 'UninterpretedOption',
                    'id': 999
                  }
                },
                'extensions': [[
                  1000,
                  536870911
                ]],
                'nested': {
                  'IdempotencyLevel': {
                    'values': {
                      'IDEMPOTENCY_UNKNOWN': 0,
                      'NO_SIDE_EFFECTS': 1,
                      'IDEMPOTENT': 2
                    }
                  }
                }
              },
              'UninterpretedOption': {
                'fields': {
                  'name': {
                    'rule': 'repeated',
                    'type': 'NamePart',
                    'id': 2
                  },
                  'identifierValue': {
                    'type': 'string',
                    'id': 3
                  },
                  'positiveIntValue': {
                    'type': 'uint64',
                    'id': 4
                  },
                  'negativeIntValue': {
                    'type': 'int64',
                    'id': 5
                  },
                  'doubleValue': {
                    'type': 'double',
                    'id': 6
                  },
                  'stringValue': {
                    'type': 'bytes',
                    'id': 7
                  },
                  'aggregateValue': {
                    'type': 'string',
                    'id': 8
                  }
                },
                'nested': {
                  'NamePart': {
                    'fields': {
                      'namePart': {
                        'rule': 'required',
                        'type': 'string',
                        'id': 1
                      },
                      'isExtension': {
                        'rule': 'required',
                        'type': 'bool',
                        'id': 2
                      }
                    }
                  }
                }
              },
              'SourceCodeInfo': {
                'fields': {
                  'location': {
                    'rule': 'repeated',
                    'type': 'Location',
                    'id': 1
                  }
                },
                'nested': {
                  'Location': {
                    'fields': {
                      'path': {
                        'rule': 'repeated',
                        'type': 'int32',
                        'id': 1
                      },
                      'span': {
                        'rule': 'repeated',
                        'type': 'int32',
                        'id': 2
                      },
                      'leadingComments': {
                        'type': 'string',
                        'id': 3
                      },
                      'trailingComments': {
                        'type': 'string',
                        'id': 4
                      },
                      'leadingDetachedComments': {
                        'rule': 'repeated',
                        'type': 'string',
                        'id': 6
                      }
                    }
                  }
                }
              },
              'GeneratedCodeInfo': {
                'fields': {
                  'annotation': {
                    'rule': 'repeated',
                    'type': 'Annotation',
                    'id': 1
                  }
                },
                'nested': {
                  'Annotation': {
                    'fields': {
                      'path': {
                        'rule': 'repeated',
                        'type': 'int32',
                        'id': 1
                      },
                      'sourceFile': {
                        'type': 'string',
                        'id': 2
                      },
                      'begin': {
                        'type': 'int32',
                        'id': 3
                      },
                      'end': {
                        'type': 'int32',
                        'id': 4
                      }
                    }
                  }
                }
              }
            }
          },
          'api': {
            'options': {
              'go_package': 'google.golang.org/genproto/googleapis/api/annotations;annotations',
              'java_multiple_files': true,
              'java_outer_classname': 'HttpProto',
              'java_package': 'com.google.api',
              'objc_class_prefix': 'GAPI',
              'cc_enable_arenas': true
            },
            'nested': {
              'http': {
                'type': 'HttpRule',
                'id': 72295728,
                'extend': 'google.protobuf.MethodOptions'
              },
              'Http': {
                'fields': {
                  'rules': {
                    'rule': 'repeated',
                    'type': 'HttpRule',
                    'id': 1
                  }
                }
              },
              'HttpRule': {
                'oneofs': {
                  'pattern': {
                    'oneof': [
                      'get',
                      'put',
                      'post',
                      'delete',
                      'patch',
                      'custom'
                    ]
                  }
                },
                'fields': {
                  'selector': {
                    'type': 'string',
                    'id': 1
                  },
                  'get': {
                    'type': 'string',
                    'id': 2
                  },
                  'put': {
                    'type': 'string',
                    'id': 3
                  },
                  'post': {
                    'type': 'string',
                    'id': 4
                  },
                  'delete': {
                    'type': 'string',
                    'id': 5
                  },
                  'patch': {
                    'type': 'string',
                    'id': 6
                  },
                  'custom': {
                    'type': 'CustomHttpPattern',
                    'id': 8
                  },
                  'body': {
                    'type': 'string',
                    'id': 7
                  },
                  'additionalBindings': {
                    'rule': 'repeated',
                    'type': 'HttpRule',
                    'id': 11
                  }
                }
              },
              'CustomHttpPattern': {
                'fields': {
                  'kind': {
                    'type': 'string',
                    'id': 1
                  },
                  'path': {
                    'type': 'string',
                    'id': 2
                  }
                }
              }
            }
          }
        }
      },
      'wix': {
        'nested': {
          'api': {
            'options': {
              'java_multiple_files': true,
              'java_outer_classname': 'ValidationsProto',
              'java_package': 'com.wix.api'
            },
            'nested': {
              'max': {
                'type': 'double',
                'id': 50201,
                'extend': 'google.protobuf.FieldOptions'
              },
              'min': {
                'type': 'double',
                'id': 50202,
                'extend': 'google.protobuf.FieldOptions'
              },
              'maxLength': {
                'type': 'int32',
                'id': 50203,
                'extend': 'google.protobuf.FieldOptions'
              },
              'minLength': {
                'type': 'int32',
                'id': 50204,
                'extend': 'google.protobuf.FieldOptions'
              },
              'maxSize': {
                'type': 'int32',
                'id': 50209,
                'extend': 'google.protobuf.FieldOptions'
              },
              'minSize': {
                'type': 'int32',
                'id': 50210,
                'extend': 'google.protobuf.FieldOptions'
              },
              'format': {
                'type': 'Format',
                'id': 50205,
                'extend': 'google.protobuf.FieldOptions'
              },
              'readOnly': {
                'type': 'bool',
                'id': 50208,
                'extend': 'google.protobuf.FieldOptions'
              },
              'required': {
                'rule': 'repeated',
                'type': 'string',
                'id': 50200,
                'extend': 'google.protobuf.MethodOptions'
              },
              'Format': {
                'values': {
                  'EMAIL': 0,
                  'HOSTNAME': 1,
                  'IPV4': 2,
                  'IPV6': 3,
                  'URI': 4,
                  'PHONE': 7,
                  'CREDIT_CARD': 8,
                  'GUID': 9,
                  'COUNTRY': 10,
                  'LANGUAGE': 11,
                  'DECIMAL_VALUE': 12,
                  'CURRENCY': 13
                }
              }
            }
          }
        }
      }
    }
  });

  $root.__lookup = function() {
    return path => {
      return root.lookup(path);
    };
  };
  return $root.__lookup();
};
$root.com = (function() {
  const com = {};

  com.wixpress = (function() {
    const wixpress = {};

    wixpress.somethingtoplatform = (function() {
      const somethingtoplatform = {};

      somethingtoplatform.node = (function() {
        const node = {};

        node.proto = (function() {
          const proto = {};

          proto.TodoService = (function() {

            class TodoService {

              constructor() {
                if (this.constructor.name === TodoService.name) {
                  throw new TypeError('class TodoService is abstract');
                }
              }

              getTodos(aspects, msg) {
                throw new TypeError('method getTodos is abstract');
              }

              postTodo(aspects, msg) {
                throw new TypeError('method postTodo is abstract');
              }
            }

            TodoService.prototype.getTodos._messageTypes = function() {
              return [
                $root.com.wixpress.somethingtoplatform.node.proto.Empty,
                $root.com.wixpress.somethingtoplatform.node.proto.TodoList
              ];
            };
            TodoService.prototype.postTodo._messageTypes = function() {
              return [
                $root.com.wixpress.somethingtoplatform.node.proto.Todo,
                $root.com.wixpress.somethingtoplatform.node.proto.PostTodoResponse
              ];
            };
            TodoService.prototype.getTodos.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.TodoService.GetTodos');
            };
            TodoService.prototype.postTodo.__proto = pbjs => {
              return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.TodoService.PostTodo');
            };
            Object.defineProperty(TodoService.prototype, '__isRpcService__', {
              value: true,
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(TodoService.prototype, '__fqn__', {
              value: 'com.wixpress.somethingtoplatform.node.proto.TodoService',
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(TodoService.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.TodoService');
              },
              enumerable: false,
              configurable: false
            });
            Object.defineProperty(TodoService.prototype, '__options__', {
              value: $root.__options,
              enumerable: false,
              configurable: false
            });
            return TodoService;
          }());
          proto.Empty = (function() {

            class Empty {

              constructor(props) {}

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (!(typeof msg === 'object' && !Array.isArray(msg) && Object.keys(msg).length === 0)) {
                    errors.error('empty object expected');
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.somethingtoplatform.node.proto.Empty();

                return result;
              }

              static toGRPC(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const grpc = {};

                  return grpc;
                }
              }

              static fromGRPC(grpc, helper) {
                if (grpc == null) {
                  return null;
                } else {
                  const result = new $root.com.wixpress.somethingtoplatform.node.proto.Empty();

                  return result;
                }
              }

              static describe() {
                return {
                  'fields': {}
                };
              }
            }

            Object.defineProperty(Empty.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.Empty');
              },
              enumerable: false,
              configurable: false
            });
            return Empty;
          }());
          proto.Todo = (function() {

            class Todo {

              constructor(props) {
                this.description = props && props.description;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.description != null) {
                    if (typeof msg.description !== 'string') {
                      errors.field('description').error('string expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.description != null) {
                    json.description = obj.description;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.somethingtoplatform.node.proto.Todo();

                if (json.description != null) {
                  result.description = json.description;
                } else {
                  result.description = '';
                }
                return result;
              }

              static toGRPC(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const grpc = {};

                  if (obj.description != null) {
                    grpc.description = obj.description;
                  }
                  return grpc;
                }
              }

              static fromGRPC(grpc, helper) {
                if (grpc == null) {
                  return null;
                } else {
                  const result = new $root.com.wixpress.somethingtoplatform.node.proto.Todo();

                  if (grpc.description != null) {
                    result.description = grpc.description;
                  } else {
                    result.description = '';
                  }
                  return result;
                }
              }

              static describe() {
                return {
                  'fields': {
                    'description': {
                      'type': 'string',
                      'id': 1
                    }
                  }
                };
              }
            }

            Object.defineProperty(Todo.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.Todo');
              },
              enumerable: false,
              configurable: false
            });
            return Todo;
          }());
          proto.TodoList = (function() {

            class TodoList {

              constructor(props) {
                this.todoList = props && props.todoList;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.todoList != null) {
                    const fieldErrors = errors.field('todoList');

                    if (!Array.isArray(msg.todoList)) {
                      fieldErrors.error('array expected');
                    } else {
                      msg.todoList.forEach((value, index) => {
                        $root.com.wixpress.somethingtoplatform.node.proto.Todo.verify(value, helper, fieldErrors.index(index));
                      });
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.todoList != null) {
                    json.todoList = obj.todoList.map(e => {
                      return $root.com.wixpress.somethingtoplatform.node.proto.Todo.toJSON(e, helper);
                    });
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.somethingtoplatform.node.proto.TodoList();

                if (json.todoList != null) {
                  result.todoList = json.todoList.map(e => {
                    return $root.com.wixpress.somethingtoplatform.node.proto.Todo.fromJSON(e, helper);
                  });
                } else {
                  result.todoList = [];
                }
                return result;
              }

              static toGRPC(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const grpc = {};

                  if (obj.todoList != null) {
                    grpc.todoList = obj.todoList.map(e => {
                      return $root.com.wixpress.somethingtoplatform.node.proto.Todo.toGRPC(e, helper);
                    });
                  }
                  return grpc;
                }
              }

              static fromGRPC(grpc, helper) {
                if (grpc == null) {
                  return null;
                } else {
                  const result = new $root.com.wixpress.somethingtoplatform.node.proto.TodoList();

                  if (grpc.todoList != null) {
                    result.todoList = grpc.todoList.map(e => {
                      return $root.com.wixpress.somethingtoplatform.node.proto.Todo.fromGRPC(e, helper);
                    });
                  } else {
                    result.todoList = [];
                  }
                  return result;
                }
              }

              static describe() {
                return {
                  'fields': {
                    'todoList': {
                      'rule': 'repeated',
                      'type': $root.com.wixpress.somethingtoplatform.node.proto.Todo,
                      'id': 1
                    }
                  }
                };
              }
            }

            Object.defineProperty(TodoList.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.TodoList');
              },
              enumerable: false,
              configurable: false
            });
            return TodoList;
          }());
          proto.PostTodoResponse = (function() {

            class PostTodoResponse {

              constructor(props) {
                this.status = props && props.status;
              }

              static verify(msg, helper, errors = helper.verification.Errors.empty()) {
                if (typeof msg !== 'object' || msg == null) {
                  errors.error('object expected');
                } else {
                  if (msg.status != null) {
                    if (typeof msg.status !== 'string') {
                      errors.field('status').error('string expected');
                    }
                  }
                }
                return errors;
              }

              static toJSON(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const json = {};

                  if (obj.status != null) {
                    json.status = obj.status;
                  }
                  return json;
                }
              }

              static fromJSON(json, helper) {
                const result = new $root.com.wixpress.somethingtoplatform.node.proto.PostTodoResponse();

                if (json.status != null) {
                  result.status = json.status;
                } else {
                  result.status = '';
                }
                return result;
              }

              static toGRPC(obj, helper) {
                if (obj == null) {
                  return null;
                } else {
                  const grpc = {};

                  if (obj.status != null) {
                    grpc.status = obj.status;
                  }
                  return grpc;
                }
              }

              static fromGRPC(grpc, helper) {
                if (grpc == null) {
                  return null;
                } else {
                  const result = new $root.com.wixpress.somethingtoplatform.node.proto.PostTodoResponse();

                  if (grpc.status != null) {
                    result.status = grpc.status;
                  } else {
                    result.status = '';
                  }
                  return result;
                }
              }

              static describe() {
                return {
                  'fields': {
                    'status': {
                      'type': 'string',
                      'id': 1
                    }
                  }
                };
              }
            }

            Object.defineProperty(PostTodoResponse.prototype, '__proto', {
              value: pbjs => {
                return $root.__lookup(pbjs)('com.wixpress.somethingtoplatform.node.proto.PostTodoResponse');
              },
              enumerable: false,
              configurable: false
            });
            return PostTodoResponse;
          }());
          return proto;
        }());
        return node;
      }());
      return somethingtoplatform;
    }());
    return wixpress;
  }());
  return com;
}());
$root.google = (function() {
  const google = {};

  google.protobuf = (function() {
    const protobuf = {};

    protobuf.Empty = (function() {

      class Empty {

        constructor(props) {}

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            if (!(typeof msg === 'object' && !Array.isArray(msg) && Object.keys(msg).length === 0)) {
              errors.error('empty object expected');
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.protobuf.Empty();

          return result;
        }

        static toGRPC(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const grpc = {};

            return grpc;
          }
        }

        static fromGRPC(grpc, helper) {
          if (grpc == null) {
            return null;
          } else {
            const result = new $root.google.protobuf.Empty();

            return result;
          }
        }

        static describe() {
          return {
            'fields': {}
          };
        }
      }

      Object.defineProperty(Empty.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.protobuf.Empty');
        },
        enumerable: false,
        configurable: false
      });
      return Empty;
    }());
    return protobuf;
  }());
  google.api = (function() {
    const api = {};

    api.Http = (function() {

      class Http {

        constructor(props) {
          this.rules = props && props.rules;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            if (msg.rules != null) {
              const fieldErrors = errors.field('rules');

              if (!Array.isArray(msg.rules)) {
                fieldErrors.error('array expected');
              } else {
                msg.rules.forEach((value, index) => {
                  $root.google.api.HttpRule.verify(value, helper, fieldErrors.index(index));
                });
              }
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            if (obj.rules != null) {
              json.rules = obj.rules.map(e => {
                return $root.google.api.HttpRule.toJSON(e, helper);
              });
            }
            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.api.Http();

          if (json.rules != null) {
            result.rules = json.rules.map(e => {
              return $root.google.api.HttpRule.fromJSON(e, helper);
            });
          } else {
            result.rules = [];
          }
          return result;
        }

        static toGRPC(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const grpc = {};

            if (obj.rules != null) {
              grpc.rules = obj.rules.map(e => {
                return $root.google.api.HttpRule.toGRPC(e, helper);
              });
            }
            return grpc;
          }
        }

        static fromGRPC(grpc, helper) {
          if (grpc == null) {
            return null;
          } else {
            const result = new $root.google.api.Http();

            if (grpc.rules != null) {
              result.rules = grpc.rules.map(e => {
                return $root.google.api.HttpRule.fromGRPC(e, helper);
              });
            } else {
              result.rules = [];
            }
            return result;
          }
        }

        static describe() {
          return {
            'fields': {
              'rules': {
                'rule': 'repeated',
                'type': $root.google.api.HttpRule,
                'id': 1
              }
            }
          };
        }
      }

      Object.defineProperty(Http.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.api.Http');
        },
        enumerable: false,
        configurable: false
      });
      return Http;
    }());
    api.HttpRule = (function() {

      class HttpRule {

        constructor(props) {
          this.selector = props && props.selector;
          this.get = props && props.get;
          this.put = props && props.put;
          this.post = props && props.post;
          this.delete = props && props.delete;
          this.patch = props && props.patch;
          this.custom = props && props.custom;
          this.body = props && props.body;
          this.additionalBindings = props && props.additionalBindings;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            const oneOfMutex = {};

            if (msg.selector != null) {
              if (typeof msg.selector !== 'string') {
                errors.field('selector').error('string expected');
              }
            }
            if (msg.get != null) {
              if (oneOfMutex['pattern']) {
                errors.field('get').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.get !== 'string') {
                  errors.field('get').error('string expected');
                }
              }
            }
            if (msg.put != null) {
              if (oneOfMutex['pattern']) {
                errors.field('put').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.put !== 'string') {
                  errors.field('put').error('string expected');
                }
              }
            }
            if (msg.post != null) {
              if (oneOfMutex['pattern']) {
                errors.field('post').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.post !== 'string') {
                  errors.field('post').error('string expected');
                }
              }
            }
            if (msg.delete != null) {
              if (oneOfMutex['pattern']) {
                errors.field('delete').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.delete !== 'string') {
                  errors.field('delete').error('string expected');
                }
              }
            }
            if (msg.patch != null) {
              if (oneOfMutex['pattern']) {
                errors.field('patch').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                if (typeof msg.patch !== 'string') {
                  errors.field('patch').error('string expected');
                }
              }
            }
            if (msg.custom != null) {
              if (oneOfMutex['pattern']) {
                errors.field('custom').up().field('pattern').error('multiple values');
              } else {
                oneOfMutex['pattern'] = true;
                $root.google.api.CustomHttpPattern.verify(msg.custom, helper, errors.field('custom'));
              }
            }
            if (msg.body != null) {
              if (typeof msg.body !== 'string') {
                errors.field('body').error('string expected');
              }
            }
            if (msg.additionalBindings != null) {
              const fieldErrors = errors.field('additionalBindings');

              if (!Array.isArray(msg.additionalBindings)) {
                fieldErrors.error('array expected');
              } else {
                msg.additionalBindings.forEach((value, index) => {
                  $root.google.api.HttpRule.verify(value, helper, fieldErrors.index(index));
                });
              }
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            if (obj.selector != null) {
              json.selector = obj.selector;
            }
            if (obj.get != null) {
              json.get = obj.get;
            }
            if (obj.put != null) {
              json.put = obj.put;
            }
            if (obj.post != null) {
              json.post = obj.post;
            }
            if (obj.delete != null) {
              json.delete = obj.delete;
            }
            if (obj.patch != null) {
              json.patch = obj.patch;
            }
            if (obj.custom != null) {
              json.custom = $root.google.api.CustomHttpPattern.toJSON(obj.custom, helper);
            }
            if (obj.body != null) {
              json.body = obj.body;
            }
            if (obj.additionalBindings != null) {
              json.additionalBindings = obj.additionalBindings.map(e => {
                return $root.google.api.HttpRule.toJSON(e, helper);
              });
            }
            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.api.HttpRule();

          if (json.selector != null) {
            result.selector = json.selector;
          } else {
            result.selector = '';
          }
          if (json.get != null) {
            result.get = json.get;
          } else {
            delete result.get;
          }
          if (json.put != null) {
            result.put = json.put;
          } else {
            delete result.put;
          }
          if (json.post != null) {
            result.post = json.post;
          } else {
            delete result.post;
          }
          if (json.delete != null) {
            result.delete = json.delete;
          } else {
            delete result.delete;
          }
          if (json.patch != null) {
            result.patch = json.patch;
          } else {
            delete result.patch;
          }
          if (json.custom != null) {
            result.custom = $root.google.api.CustomHttpPattern.fromJSON(json.custom, helper);
          } else {
            delete result.custom;
          }
          if (json.body != null) {
            result.body = json.body;
          } else {
            result.body = '';
          }
          if (json.additionalBindings != null) {
            result.additionalBindings = json.additionalBindings.map(e => {
              return $root.google.api.HttpRule.fromJSON(e, helper);
            });
          } else {
            result.additionalBindings = [];
          }
          return result;
        }

        static toGRPC(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const grpc = {};

            if (obj.selector != null) {
              grpc.selector = obj.selector;
            }
            if (obj.get != null) {
              grpc.get = obj.get;
            }
            if (obj.put != null) {
              grpc.put = obj.put;
            }
            if (obj.post != null) {
              grpc.post = obj.post;
            }
            if (obj.delete != null) {
              grpc.delete = obj.delete;
            }
            if (obj.patch != null) {
              grpc.patch = obj.patch;
            }
            if (obj.custom != null) {
              grpc.custom = $root.google.api.CustomHttpPattern.toGRPC(obj.custom, helper);
            }
            if (obj.body != null) {
              grpc.body = obj.body;
            }
            if (obj.additionalBindings != null) {
              grpc.additionalBindings = obj.additionalBindings.map(e => {
                return $root.google.api.HttpRule.toGRPC(e, helper);
              });
            }
            return grpc;
          }
        }

        static fromGRPC(grpc, helper) {
          if (grpc == null) {
            return null;
          } else {
            const result = new $root.google.api.HttpRule();

            if (grpc.selector != null) {
              result.selector = grpc.selector;
            } else {
              result.selector = '';
            }
            if (grpc.get != null) {
              result.get = grpc.get;
            } else {
              delete result.get;
            }
            if (grpc.put != null) {
              result.put = grpc.put;
            } else {
              delete result.put;
            }
            if (grpc.post != null) {
              result.post = grpc.post;
            } else {
              delete result.post;
            }
            if (grpc.delete != null) {
              result.delete = grpc.delete;
            } else {
              delete result.delete;
            }
            if (grpc.patch != null) {
              result.patch = grpc.patch;
            } else {
              delete result.patch;
            }
            if (grpc.custom != null) {
              result.custom = $root.google.api.CustomHttpPattern.fromGRPC(grpc.custom, helper);
            } else {
              delete result.custom;
            }
            if (grpc.body != null) {
              result.body = grpc.body;
            } else {
              result.body = '';
            }
            if (grpc.additionalBindings != null) {
              result.additionalBindings = grpc.additionalBindings.map(e => {
                return $root.google.api.HttpRule.fromGRPC(e, helper);
              });
            } else {
              result.additionalBindings = [];
            }
            return result;
          }
        }

        static describe() {
          return {
            'oneofs': {
              'pattern': {
                'oneof': [
                  'get',
                  'put',
                  'post',
                  'delete',
                  'patch',
                  'custom'
                ]
              }
            },
            'fields': {
              'selector': {
                'type': 'string',
                'id': 1
              },
              'get': {
                'type': 'string',
                'id': 2
              },
              'put': {
                'type': 'string',
                'id': 3
              },
              'post': {
                'type': 'string',
                'id': 4
              },
              'delete': {
                'type': 'string',
                'id': 5
              },
              'patch': {
                'type': 'string',
                'id': 6
              },
              'custom': {
                'type': $root.google.api.CustomHttpPattern,
                'id': 8
              },
              'body': {
                'type': 'string',
                'id': 7
              },
              'additionalBindings': {
                'rule': 'repeated',
                'type': $root.google.api.HttpRule,
                'id': 11
              }
            }
          };
        }
      }

      Object.defineProperty(HttpRule.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.api.HttpRule');
        },
        enumerable: false,
        configurable: false
      });
      return HttpRule;
    }());
    api.CustomHttpPattern = (function() {

      class CustomHttpPattern {

        constructor(props) {
          this.kind = props && props.kind;
          this.path = props && props.path;
        }

        static verify(msg, helper, errors = helper.verification.Errors.empty()) {
          if (typeof msg !== 'object' || msg == null) {
            errors.error('object expected');
          } else {
            if (msg.kind != null) {
              if (typeof msg.kind !== 'string') {
                errors.field('kind').error('string expected');
              }
            }
            if (msg.path != null) {
              if (typeof msg.path !== 'string') {
                errors.field('path').error('string expected');
              }
            }
          }
          return errors;
        }

        static toJSON(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const json = {};

            if (obj.kind != null) {
              json.kind = obj.kind;
            }
            if (obj.path != null) {
              json.path = obj.path;
            }
            return json;
          }
        }

        static fromJSON(json, helper) {
          const result = new $root.google.api.CustomHttpPattern();

          if (json.kind != null) {
            result.kind = json.kind;
          } else {
            result.kind = '';
          }
          if (json.path != null) {
            result.path = json.path;
          } else {
            result.path = '';
          }
          return result;
        }

        static toGRPC(obj, helper) {
          if (obj == null) {
            return null;
          } else {
            const grpc = {};

            if (obj.kind != null) {
              grpc.kind = obj.kind;
            }
            if (obj.path != null) {
              grpc.path = obj.path;
            }
            return grpc;
          }
        }

        static fromGRPC(grpc, helper) {
          if (grpc == null) {
            return null;
          } else {
            const result = new $root.google.api.CustomHttpPattern();

            if (grpc.kind != null) {
              result.kind = grpc.kind;
            } else {
              result.kind = '';
            }
            if (grpc.path != null) {
              result.path = grpc.path;
            } else {
              result.path = '';
            }
            return result;
          }
        }

        static describe() {
          return {
            'fields': {
              'kind': {
                'type': 'string',
                'id': 1
              },
              'path': {
                'type': 'string',
                'id': 2
              }
            }
          };
        }
      }

      Object.defineProperty(CustomHttpPattern.prototype, '__proto', {
        value: pbjs => {
          return $root.__lookup(pbjs)('google.api.CustomHttpPattern');
        },
        enumerable: false,
        configurable: false
      });
      return CustomHttpPattern;
    }());
    return api;
  }());
  return google;
}());
$root.wix = (function() {
  const wix = {};

  wix.api = (function() {
    const api = {};

    api.Format = {
      verify: (value, helper, errors = helper.verification.Errors.empty()) => {
        switch (value) {
          default: {
            errors.error('enum expected');
          }
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
            break;
        }
        return errors;
      },
      'EMAIL': 0,
      0: 'EMAIL',
      'HOSTNAME': 1,
      1: 'HOSTNAME',
      'IPV4': 2,
      2: 'IPV4',
      'IPV6': 3,
      3: 'IPV6',
      'URI': 4,
      4: 'URI',
      'PHONE': 7,
      7: 'PHONE',
      'CREDIT_CARD': 8,
      8: 'CREDIT_CARD',
      'GUID': 9,
      9: 'GUID',
      'COUNTRY': 10,
      10: 'COUNTRY',
      'LANGUAGE': 11,
      11: 'LANGUAGE',
      'DECIMAL_VALUE': 12,
      12: 'DECIMAL_VALUE',
      'CURRENCY': 13,
      13: 'CURRENCY'
    };
    return api;
  }());
  return wix;
}());
module.exports = $root;