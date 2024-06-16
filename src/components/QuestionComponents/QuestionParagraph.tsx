import { CSSProperties, FC } from "react"

type PropsType = {
    text: string
    isCenter?: boolean
}


const Paragraph: FC<PropsType> = (props: PropsType) => {
    const { text, isCenter } = props

    // 样式
    const style: CSSProperties = {}
    if (isCenter) style.textAlign = 'center'
    // 换行
    const textList = text?.split('\n')
    return (
        <p>
            {textList?.map((item, index) => (
                <span key={index}>{index > 0 && <br />}{item}</span>
            ))}
        </p>
    )
}

export default Paragraph