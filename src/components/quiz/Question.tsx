import './css/Question.css'
interface QuestionProps {
    statement: string,
    options: string[],
    onSelection: Function,
    selected?: number
}

export function Question(props: QuestionProps) {

    // Gerar os botões 
    const buttons = props.options.map((answerOption, index) => (
        <button 
            key={ answerOption }
            onClick={ () => props.onSelection(index) }
            className={ index === props.selected ? 'selected' : '' }
        >
            { answerOption }
        </button>
    ))

    return (
        <div className='question'>
            <h2>{ props.statement }</h2>
    		{ buttons }
        </div>
      )
}