// export default function Log({data}) {
//
//     let list = []
//     for (const item of data) {
//         const turn = item.player
//         list = [turn, ...list]
//         console.log(turn)
//     }
//
//     return <ol id="log">
//         {list.map((elem, index) => <li key={index}>{elem}</li>)}
//     </ol>
// }

export default function Log({data}) {

    return <ol id="log">
        {data.map((elem) => <li key={`${elem.square.row}${elem.square.col}}`}>
            {elem.player} selected {elem.square.row}, {elem.square.col}
        </li>)}
    </ol>
}