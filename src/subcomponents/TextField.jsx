export default function TextField({...props}) {
    return (
        <>
            <div>
                <b>
                {props.title}
                </b>
            </div>
            <div>
                {props.content}
            </div>
        </>
    )
}