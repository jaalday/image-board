import { useState, useEffect } from "react";

const Form = ({action}) => {
    const [input1, setInput1] = useState([]);
    const [imagesURLs, setImagesURLs] = useState([]);

    useEffect(() =>{
        if (input1.length >1) return;
        const newImage = [];
        input1.forEach(image => newImage.push(URL.createObjectURL(image)));
        setImagesURLs(newImage);
    }, [input1]);


    const onImageChange = (e) =>{
        setInput1([...e.target.files]);
    };

    const handleSubmit = (e) =>
    e.preventDefault();
    action(input1);

    return(
        <>
        <form onSubmit = {handleSubmit}>
            <label>Choose an Image:  
                <br></br>
                <input type="file" multiple accept="image/*" onChange={onImageChange} name="image1" />
                {imagesURLs.map(imageSrc => <img src={imageSrc}/>) }
            </label>
            <button type="submit">Add</button>

        </form>
        
        
        
        </>

    )










}












export default Form;