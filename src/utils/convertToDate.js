const convertToDate = (sec)=>{
    const date = new Date(0);
    
    return date.setUTCSeconds(sec);
}

export default convertToDate;