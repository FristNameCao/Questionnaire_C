import PageWrapper from "@/components/PageWrapper";
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import styles from "@/styles/Question.module.scss";
import { getQuestionById } from "../api/question";
import { getComponent } from "@/components/QuestionComponents";
type PropsType = {
    errno: number
    data?: {
        id: string
        title: string
        desc?: string
        js?: string
        css?: string
        isPublished: boolean
        isDeleted: boolean
        compontList: Array<any>
    }
    msg?: string
}

function Question(props: PropsType) {
    const { errno, data, msg = '' } = props

    const { id, title = "", desc = "", isDeleted = false, isPublished = false, compontList = [] } = data || {}

    // 数据错误
    if (errno !== 0) {
        return <PageWrapper title="错误">
            <h1>错误</h1>
            <p>{msg}</p>
        </PageWrapper>
    }

    // 已经删除
    if (isDeleted) {
        return <PageWrapper title="错误" desc={desc}>
            <h1>错误</h1>
            <p>问卷不存在</p>
        </PageWrapper>
    }

    // 尚未发布的，提示错误
    if (!isPublished) {
        return <PageWrapper title="错误" desc={desc}>
            <h1>错误</h1>
            <p>问卷未发布</p>
        </PageWrapper>
    }

    // 遍历组件
    const compontListElem = <>
        {compontList.map((component) => {
            const ComponentElem = getComponent(component)
            return <div key={component.fe_id} className={styles.componentWrapper}>
                {ComponentElem}
            </div>
        })}</>

    return (
        <PageWrapper title={title}>
            <form method='post' action="/api/answer">
                <input type="hidden" name="questionId" value={id} />
                {compontListElem}
                {/* <div className={styles.componentWrapper}>
                    <QuestionInput fe_id="c1" props={{ title: "你的姓名", placeholder: "请输入你的姓名" }} />
                </div>
                <div className={styles.componentWrapper}>
                    <QuestionRadio fe_id="c2" props={{
                        title: "你的性别",
                        options: [
                            { value: "male", text: "男" },
                            { value: "female", text: "女" }
                        ],
                        value: "male",
                        isVertical: true
                    }} />
                </div> */}
                <div className={styles.submitBtnContainer}>
                    <button type="submit">提交</button>
                </div>
            </form>
        </PageWrapper>
    );
}

export async function getServerSideProps(context: any) {
    const { id = '' } = context.query

    // 根据id获取问卷数据
    const data = await getQuestionById(id)

    // {errno, data, msg}
    return {
        props: {
            ...data
        }
    }
}

export default Question
