const CheckoutList = ({ item, index }) => {
  const { productName, productImage, productPrice, quantity, productUnit } =
    item;
  console.log(item);
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="avatar">
          <div className="mask mask-square rounded-md h-12 w-12">
            <img src={productImage} alt="Pro_image" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold">{productName}</div>
      </td>
      <td>{productPrice}/-</td>
      <td>
        {quantity} {productUnit}
      </td>
      <td>{productPrice * quantity}/-</td>
    </tr>
  );
};

export default CheckoutList;
