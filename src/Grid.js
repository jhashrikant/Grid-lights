function Grid({ data, handleclick }) {
    return (
        <div  className="boxContainer">
            {data?.map((val) => (
                val.isBox ?
                    <div key={val.id} onClick={() => handleclick(val.id)} style={{ backgroundColor: val.isClicked ? 'green' : '' }} className='box'></div>
                    : <span key={val.id}></span>
            ))}
        </div>
    )
}

export default Grid;