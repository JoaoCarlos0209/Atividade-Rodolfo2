import axios from "axios";
const baseUrl = 'https://g183k2nx-7029.brs.devtunnels.ms';
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Contet-Type': 'application/json'
    }
})

export const consultaAcaoPorCodigo = (codigoAcao: string) => {
    return apiClient.get<any>(`${baseUrl}/Share/${codigoAcao}`);
}