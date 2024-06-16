import { CSSProperties, FC } from "react"

type PropsType = {
    // 不需要fe_id 因为只用于展示不需要提交数据
    text: string
    level: number
    isCenter?: string
}

const TItle: FC<PropsType> = (props: PropsType) => {
    const { text, level, isCenter } = props
    // 样式
    const style: CSSProperties = {}
    if (isCenter) style.textAlign = 'center'

    switch (level) {
        case 1:
            return <h1 style={style}>{text}</h1>
        case 2:
            return <h2 style={style}>{text}</h2>
        case 3:
            return <h3 style={style}>{text}</h3>
    }
    return <div>title</div>
}

export default TItle