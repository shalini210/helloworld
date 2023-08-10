import http from "../http-common"
class StudentDataService
{
    getAll()
    {
        return http.get("student/")
    }
    create(data)
    {
        console.log(data)
        return http.post("student/",data)
    }
    update(x)
    {console.log("Data is")
        console.log(x.d)
        return http.put(`student/`+x.id,x.d)
    }
    delete(id)
    {
        return http.delete("student/"+id);

    }
}
export default new StudentDataService();