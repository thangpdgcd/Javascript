//module

import logger,{
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './logger.js'

console.log(logger);

logger('test message',TYPE_ERROR)