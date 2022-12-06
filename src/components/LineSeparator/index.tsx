interface props {
    margin: boolean
}

export default function LineSeparator({margin}:props){
    return (
        <div className={`lineSeparator ${margin && 'lineSeparator__margin' } `}></div>
    )
}