import QuestionCheckbox from "./QuestionCheckbox";
import QuestionInfo from "./QuestionInfo";
import QuestionInput from "./QuestionInput";
import QuestionParagraph from "./QuestionParagraph";
import QuestionRadio from "./QuestionRadio";
import QuestionTextarea from "./QuestionTextarea";
import QuestionTitle from "./QuestionTitle";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  isHidden: boolean;
  props: any;
};

export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, type, isHidden, props = {} } = comp;

  if (isHidden) return null;

  switch (type) {
    case 'questionInput':
      return <QuestionInput fe_id={fe_id} props={props} />;
    case 'questionRadio':
      return <QuestionRadio fe_id={fe_id} props={props} />;
    case 'questionTitle':
      return <QuestionTitle {...props} />
    case 'questionParagraph':
      return <QuestionParagraph {...props} />
    case 'questionInfo':
      return <QuestionInfo {...props} />
    case 'questionTextarea':
      return <QuestionTextarea fe_id={fe_id} props={props} />;
    case 'questionCheckbox':
      return <QuestionCheckbox fe_id={fe_id} props={props} />;

    default:
      return null;
  }

};
