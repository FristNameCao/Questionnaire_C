import { FC, useEffect, useState } from "react"
import styes from "./QuestionCheckbox.module.scss"
type PropsType = {
    fe_id: string
    props: {
        title: string
        isVertical: boolean
        list: Array<{
            value: string
            text: string
            checked: boolean
        }>
    }
}


const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {

    const { title, isVertical, list = [] } = props

    const [selectedValues, setSelectedValues] = useState<string[]>([])

    //初始化时判断默认选中
    useEffect(() => {
        list.forEach(item => {
            const { value, checked } = item
            if (checked) {
                //这种写法防止报黄色波浪，改成参数就不会报错
                setSelectedValues(selectedValues => [...selectedValues, value])
            }
        })
    }, [list])

    // 切换选中
    function toggleChecked(value: any) {
        if (selectedValues.includes(value)) {
            // 已经被选中了，则取消选择
            setSelectedValues(selectedValues.filter(v => v !== value))
        } else {
            // 没有被选中，则增加选择
            setSelectedValues([...selectedValues, value])
        }
    }


    return <>
        <p>{title}</p>
        {/* toString 数组拼接成字符串，这里是隐藏域是为了form提交时候一起提交上去 */}
        <input type="hidden" name={fe_id} value={selectedValues.toString()} />
        <ul className={styes.list}>
            {list.map((item: { value: any; text: any; checked: any }) => {
                const { value, text, checked } = item
                let className = ''

                if (isVertical) className = styes.verticalItem
                else className = styes.horizontalItem


                return <li key={value} className={styes.className}>
                    <label>
                        <input type="checkbox" checked={selectedValues.includes(value)} onChange={() => toggleChecked(value)} />
                        {text}
                    </label>
                </li>
            })}
        </ul>
    </>
}

export default QuestionCheckbox