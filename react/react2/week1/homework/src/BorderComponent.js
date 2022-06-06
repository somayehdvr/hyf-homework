import './App.css';

export default function BorderComponent(props) {
    return (
        <div className={"borderComponent"}>
            {props.children}
        </div>
    )
}