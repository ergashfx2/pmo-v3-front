import React from "react";
import SmallBox from "../../components/home/small_box/SmallBox";
import Projects from '../../components/home/projects/projects'
import Chart from "../../components/home/chart/LineChart";
import { Button } from "react-bootstrap";
const Home = () => {
    return (
        <div className="m-4">
        <div className="row mb-4">
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
        <div className="mb-3 label-box">
        <h3 className="box-title mb-4">Oylik xarajatlar</h3>
        <Chart/>
        </div>
        <div className="mb-4 label-box">
        <h3 className="box-title mb-4">Barcha loyihalar</h3>
        <Projects/>
        </div>
        <Button type="primary" className="w-100">Barchasini ko'rish</Button>
            </div>
    );
};

export default Home;
