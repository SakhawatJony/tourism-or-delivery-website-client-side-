import axios from 'axios';
import React from 'react';
import './AddNewService.css'
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghoulish-werewolf-82380.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('packages added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-packages">
            <h2 className="text-center">Please Add a packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;