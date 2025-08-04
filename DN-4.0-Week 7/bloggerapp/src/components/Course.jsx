export const Course = () => {
    const courseDetails=[
        {'name' : 'Angular','Date':'04/05/2021'},
        {'name' : 'React','Date':'06/03/2021'},
        {'name' : 'Spring Boot','Date':'15/04/2021'}];
    return (
        <div>
            {courseDetails.map((course, index) => (
                <><div key={index}></div>
                <h3>{course.name}</h3>
                <p>{course.Date}</p></>
            ))}
        </div>
    )
}
