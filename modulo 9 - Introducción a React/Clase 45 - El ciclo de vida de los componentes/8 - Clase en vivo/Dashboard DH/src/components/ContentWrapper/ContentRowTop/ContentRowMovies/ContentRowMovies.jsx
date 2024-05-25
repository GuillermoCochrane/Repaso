import InfoCard from "./InfoCard/InfoCard";

let infoMovies =[{
    title: "Movies in Data Base",
    color: "primary",
    count: 21,
    icon: "film",
},
{
    title: "Total awards",
    color: "success",
    count: 79,
    icon: "award",
},
{
    title: "Actors quantity",
    color: "warning",
    count: 49,
    icon: "user",
}];

function ContentRowMovies() {
    return (
        <div className="row">
            {
                infoMovies.map((info, index) => {
                    return <InfoCard    
                                    key={index}
                                    title={info.title}
                                    color={info.color}
                                    count={info.count}
                                    icon={info.icon}
                            />
                        })
            }
        </div> 
    )
}   

export default ContentRowMovies