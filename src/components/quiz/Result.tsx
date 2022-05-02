import './css/Result.css'
interface ResultProps {
    statements: string[],
    answers: string[],
}

export function Results(props: ResultProps) {
    const results = props.answers.map((answer, index) => (
      <div 
        className='questionResult'
        key={answer}>
        <h3>Questão { index + 1 }</h3>
        { props.statements[index] }: { answer }
      </div>
    ))
    return <div>{ results }</div>
  }