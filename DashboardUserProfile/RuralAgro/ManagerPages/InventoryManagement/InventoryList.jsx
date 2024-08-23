const InventoryList = ({ inventory, index }) => {
  const {
    _id,
    productName,
    productDescription,
    productCategory,
    productPrice,
    productQuantity,
    productUnit,
    productImage,
  } = inventory;
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
        <div className="font-semibold">{_id}</div>
      </td>
      <td>
        <div className="font-semibold">{productName}</div>
      </td>
      <td>{productDescription}</td>
      <td>{productCategory}</td>
      <td>{productPrice}/-</td>
      <td>{productQuantity}</td>
      <td>{productUnit}</td>
    </tr>
  );
};

export default InventoryList;
