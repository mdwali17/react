function customRender(reactElement,container){
    /*const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.chidren
    document.setAttribute('href',reactElement.props.href)
    document.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */
   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.chidren
   for(const prop in props){
    if(prop==chidren)continue;
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    chidren:'Click me to visit the google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
