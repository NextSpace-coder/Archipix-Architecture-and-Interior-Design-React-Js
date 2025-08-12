import historyImage1 from "@/assets/img/about/history-1.jpg"
import historyImage2 from "@/assets/img/about/history-2.jpg"
import historyImage3 from "@/assets/img/about/history-3.jpg"

export default function HistorySection() {
    return (
        <div className="history-section section-padding pt-60 pb-60">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage1} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>Archipix Founding</h5>
                                <p>1995</p>
                                <p>The company is founded by John Smith, an experienced architect with a passion for
                                    sustainable design.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-history-item">
                            <div className="history-img d-none d-lg-block">
                                <img src={historyImage2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="timeline-wrap">
                    </div>
                </div>

                <div className="row mt-120 align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 order-2">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>Completing The First Project</h5>
                                <p>1996 - 1998</p>
                                <p>The company completes its first major project, a LEED-certified office building that
                                    sets a new standard.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 order-1 order-xl-2">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage3} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 d-xs-block d-xl-none mt-60 order-3">
                        <div className="single-history-item">
                            <div className="history-img">
                                <img src={historyImage2} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 order-4">
                        <div className="single-history-item">
                            <div className="content-wrap">
                                <h5>Expanding Services</h5>
                                <p>2001</p>
                                <p>The company expands its services to include interior design, and hires its first
                                    interior designer.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}