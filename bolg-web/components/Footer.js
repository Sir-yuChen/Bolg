import React from 'react'
import FooterCss from '../styles/components/footer.module.css'


function Footer() {
    return (
        <div>
            <div className={`${FooterCss.footer_div}`}>
                <div>系统由 React+Node+Ant Desgin驱动 </div>
                <div>bokeyuan.com</div>
            </div>
        </div>
    )
}

export default Footer
