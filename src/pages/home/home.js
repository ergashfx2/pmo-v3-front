import React, {useEffect} from "react";
import SmallBox from "../../components/home/small_box/SmallBox";
import UserService from "../../services/api/userService";
import {useState} from "react";
import loadingSpinner from "../../components/utils/loading/loadingSpinner";
import LoadingSpinner from "../../components/utils/loading/loadingSpinner";
const Home = () => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const getMe = async ()=>{
            try {
                await UserService.getMe()
            }catch (e){
                console.log('failed',e)
            }
        }
        getMe();
    }, []);

    if (loading){
        return <LoadingSpinner/>
    }

    return (
        <div className="row m-4">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <SmallBox color="blue" title="Loyihalar soni" link={'/all'} value="18" />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <SmallBox color="orange" title="Jarayonda" value="18" link={'/process'} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <SmallBox color="green" title="Tugatilgan" value="0" link={'/finished'} />
            </div>
        </div>
    );
};

export default Home;
