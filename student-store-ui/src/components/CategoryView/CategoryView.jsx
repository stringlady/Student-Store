import './CategoryView.css'


export default function CategoryView({label, handleClick = () => {}}) {
    return (
        <div id="helpCat">
            <button><p className='cat' onClick={handleClick}>{label}</p></button>
        </div>
    )
}
