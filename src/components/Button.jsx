

const Button = ({btnText , className}) => {
    return (
        <button className={`cursor-pointer duration-500 text-base font-semibold bg-[#06C279] text-white rounded-[5px] border border-[#06C279] hover:text-black hover:bg-transparent ${className}`}>{btnText}</button>
    )
}

export default Button