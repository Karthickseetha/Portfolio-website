const TabButton = ({active,selectTab,children}) => {

    const buttonClasses=active ? 'text-white border-b border-yellow-500':'text-white '
    return ( 
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-yellow-500 
            text-white  ${buttonClasses}`} >
            {children}
            </p>
          </button>
     );
}
 
export default TabButton;