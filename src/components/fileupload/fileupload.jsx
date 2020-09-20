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
                <ButtonDropdown  toggle={toggle}>
                <Button id="caret" color="light" className={style.buttoncolor}>CHOOSE FILES</Button>
                <DropdownToggle caret color="light" />
                <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
                </ButtonDropdown>
                <br/>       
                <br/>     
                <p className={style.textarea}>or drop PDFs here</p>
            </div>
        </div>
    )
}

export default Fileupload;