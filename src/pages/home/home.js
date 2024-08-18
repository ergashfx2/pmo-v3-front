import React from "react";
import SmallBox from "../../components/home/small_box/SmallBox";
import LineChart from "../../components/home/chart/LineChart";
const Home = () => {
    return (
        <>
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
            </>
    );
};

export default Home;
