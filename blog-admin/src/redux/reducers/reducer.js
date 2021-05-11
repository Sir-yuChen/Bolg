
import actionTypes from '../actions/actionType'
import moment from 'moment'
import {addarticle} from '../../service/index'

 const defaultState = {
  article_uuid:'',  //文章uuid
  article_title:'',//文章标题
  article_content:'',//文章markdown内容 
  article_content_show:'',//文章内容 解析markdown
  introduce:'', //文章markdown简介
  introduce_show:'',//文章简介 解析markdown
  releaseTime:moment().format("YYYY-MM-DD HH:mm:ss"),//发布时间默认当前时间
  selectType:'',//所有文章类型
  article_status: 3, //文章状态 1.已发布 2.发布中 3.草稿 4.待发布  5.job待发布
  menuList:[]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGCONTENT:
      return {
        ...state,
        article_content:action.article_content,
        article_content_show:action.article_content_show
      }
    case actionTypes.CHANGINTRODUCE:
      return {
        ...state,
        introduce:action.introduce,
        introduce_show:action.introduce_show
      }
    case actionTypes.CHANG_TITLE:
      return {
        ...state,
        article_title:action.article_title
      }
    case actionTypes.UPDATE_SELECTTYPE:
      return {
        ...state,
        selectType:action.selectType
      }
    case actionTypes.UPDATE_RELEASETIME:
      return {
        ...state,
        releaseTime:action.releaseTime
      }
    case actionTypes.UPDATE_RELEASEMODE:
      return {
        ...state,
        article_status:action.article_status
      }
    case actionTypes.ADDARTICLE:
        addarticle(state)
      return state 
    default:
      // console.log(`state=默认==>`, state)
      return state 
  }
}     