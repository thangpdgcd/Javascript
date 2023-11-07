export const TYPE_LOG='LOG'
export const TYPE_WARN='WARN'
export const TYPE_ERROR='ERROR'

function logger(log,type='log')
{
    console[type](log);
}
var object=[
    {
        id:20,
        name:'thang',
        age:20
    }
]
console.log(object);
//đẩy logger ra ngoài
 

export default logger;//