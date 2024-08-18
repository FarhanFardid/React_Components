

const CheckoutList = ({item,index}) => {
    const {name,img,price,quantity,unit} = item;
    console.log(item)
    return (
        <tr>
        <th>
          <label>{index + 1}.</label>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-square rounded-md h-12 w-12">
              <img src={img} alt="Pro_image" />
            </div>
          </div>
        </td>
        <td>
          <div className="font-semibold">{name}</div>
        </td>
        <td>{price}/-</td>
        <td>{quantity} {unit}</td>
        <td>{price*quantity}/-</td>

        
      </tr>
    //     <div className="text-green-700 flex items-center justify-between text-xl font-semibold">
         
    //     <div className="flex">
    //     <p>{index+1}.</p>
    //        <p>{item.name}</p> 
    //        <p>({item.price}/- * {item.quantity} {item.unit})</p>
    //     </div>
    //     <div>
    //         {item.quantity * item.price}
    //     </div>
    // </div>
    );
};

export default CheckoutList;