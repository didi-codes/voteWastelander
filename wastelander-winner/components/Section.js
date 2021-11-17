const Section = ({ wastelanders }) => {
  return (
    <div className='section'>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Costume</th>
            <th>Originality</th>
            <th>Creativity</th>
            <th>Wisdom</th>
          </tr>
          {wastelanders.map((wastelander) => (
            <tr>
              <td>{wastelander.name}</td>
              <td>{wastelander.costume}</td>
              <td>{wastelander.originality}</td>
              <td>{wastelander.creativity}</td>
              <td>{wastelander.wisdom}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
