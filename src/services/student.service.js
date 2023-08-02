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
    update(id,data)
    {
        return http.put(`student/{$id}`,data)
    }
    delete($id)
    {
        return http.delete(`student/{$id}`);

    }
}
export default new StudentDataService();