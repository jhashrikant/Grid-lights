function Grid({data ,handleclick}) {
    return (
        data && data.map((val, index) => (
            <div key={val.id} onClick={() => handleclick(val.id)} style={{ backgroundColor: val.isClicked ? 'green' : '' }} className='box'></div>
        ))
    )
}

export default Grid;