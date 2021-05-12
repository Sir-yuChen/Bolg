import '../../style/breadcrumbs.css'
import {useSelector} from 'react-redux'

import {Breadcrumb } from 'antd'

const Breadcrumbs = () => {

    let  breadcrumbsParamlist = useSelector(state => state.breadcrumbsParam)
    console.log(`面包屑：===》`, breadcrumbsParamlist)

    return (
        <div className='breadcrumb'>
            <Breadcrumb className='breadcrumb_div'>
                {
                    breadcrumbsParamlist.map(
                        obj => {
                            return (
                                <Breadcrumb.Item>{obj.name}</Breadcrumb.Item>
                            )
                        }
                    )
                }
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
