import React, { useState } from 'react';
import image from '../../assets/filepic.PNG'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';


import style from './fileuplaod.module.scss';

const Fileupload=()=>{
    const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

    return(
        <div className={style.outer}>
            <div className={style.inner}>
                <br/>
                <img src={image} className={style.image}/>
                <br/>
                <br/>
                <input type="file" name="file" id="file" className={style.inputfile} />
                <label for="file">CHOOSE FILES</label>
                <br/>       
                <br/>     
                <p className={style.textarea}>or drop PDFs here</p>
            </div>
        </div>
    )
}

export default Fileupload;