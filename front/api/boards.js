import request from "./axios";

class Boards {
    constructor() {
    }

    async getBoards(params) {
        let option = {
            "method": "GET",
            "url": `/boards`,
            "Content-Type": "application/json",
            "params": params
        }
        return await request(option);
    }

    async createBoard(data) {
        let option = {
            "method": "POST",
            "url": `/boards`,
            "Content-Type": "application/json",
            "data": data
        }
        return await request(option);
    }

    //TODO: API 추가 필요
    async addComment(data) {
        let option = {
            "method": "POST",
            "url": `/boards/comments`,
            "Content-Type": "application/json",
            "data": data
        }
        return await request(option);
    }

    async getBoardsByUser(params) {
        let option = {
            "method": "GET",
            "url": `/boards/user`,
            "Content-Type": "application/json",
            "params": params
        }
        return await request(option);
    }

    async getBoardById(id) {
        let option = {
            "method": "GET",
            "url": `/boards/${id}`,
            "Content-Type": "application/json",
        }
        return await request(option);
    }

    async deleteBoardById(id) {
        let option = {
            "method": "DELETE",
            "url": `/boards/${id}`,
            "Content-Type": "application/json",
        }
        return await request(option);
    }

    async changeBoardStatus(data) {
        let option = {
            "method": "PATCH",
            "url": `/boards/${data.id}/status`,
            "Content-Type": "application/json",
            "data": data.body
        }
        return await request(option);
    }

}

const boards = new Boards();
export default boards;