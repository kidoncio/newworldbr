import styled from 'styled-components'

interface NewWorldLogoSVGProps {
  width?: string
  height?: string
}

export const NewWorldLogoSVG = ({
  width = '60',
  height = '40',
}: NewWorldLogoSVGProps): JSX.Element => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 200"
      xmlSpace="preserve"
      fill="#eeefed"
      width={width}
      height={height}
    >
      <path d="M224.1,182.8c-2.8-2.9-5.6-5.8-8.3-8.7c-1-1.1-98-99-98.8-99.8c-0.7-0.7-0.7-1.6,0-2.4c1.6-1.6,6.1-5.2,6.7-5.4  c0.8-0.2,1.2,0.2,1.8,0.7c2.1,1.5,83.2,80,84.1,80.8c0.9,0.8,5.6,10.6,5.8,10.5c0.1,0.3,0.2,0.6,0.3,0.9c2.8,7.7,5.6,15.5,8.4,23.2  C224.3,182.7,224.2,182.8,224.1,182.8z" />
      <path d="M112.1,80.5c3.1,3.4,24.3,25.4,26.3,26.9c-0.4,0.4-16.1,14.1-16.4,14.5c-1.6,1.7-3.3,3.3-4.9,5c-2.1,2-3.3,4.3-3.3,7.2  c0,2.1,0.3,14.1,0.1,16.7c-0.1,1.6-1.6,24.7-1.6,27.1c0,2.3,0,4.5,0,6.8c-0.2,0-0.3,0-0.5,0c-0.1-1.7-0.3-3.4-0.3-5  c-0.1-2.4-0.9-10.7-1.1-16.5c0.2-6.7-0.3-9.6-0.3-11.3c0.1-2.9,0.3-18.6-1.4-23.4c-0.1-0.3-21.3-19.5-23.2-20.9  C88.7,104.2,111.2,81.5,112.1,80.5z M111.7,92.3c-0.8,0.7-2.2,1.5-2.9,2.1c-1,0.9-9.7,9.5-10.3,10.2c-0.7,0.8-0.6,2,0.1,2.8  c3.8,3.9,7.6,7.9,11.4,11.8c1.5,1.6,3.1,1.5,5.6-0.9c1.3-1.5,9.1-9.9,10.1-11.2c0.6-0.7,0.6-2.1,0-2.6c-1.4-1.1-8.6-8.4-11.3-10.6  C113.3,93.1,112.9,92.3,111.7,92.3z" />
      <path d="M141.7,142.2c0.4-1.4,0-2.6-0.6-3.8c-0.1-0.3-0.9-0.5-1.4-0.5c-1.6-0.1-0.8-1.2-1-1.9c-0.2-0.7,0.3-1.1,1-1.1  c2.8,0,5.7,0,8.5,0c1,0,1.3,0.4,1.3,1.3c0,0.5,0,1,0,1.6c-1,0.1-1.8,0.2-3,0.4c1.3,5.1,2.6,10,3.8,14.8c0.1,0,3.7-12.2,4.2-14.1  c0.2-0.8-0.1-1.1-0.9-1.1c-1.4,0-2.1-1-1.6-2.4c0.1-0.2,0.4-0.5,0.7-0.5c2.8,0,5.7,0,8.6,0c0,0.6,0,1.2,0,1.7  c-0.1,1.7-0.1,1.6-1.8,2c-0.4,0.1-0.9,0.5-1.1,0.9c-0.8,1.7-7.6,21-8.2,22.9c-0.2,0.8-0.8,0.7-1.3,0.7c-0.4,0-0.9-0.3-1-0.6  c-1.1-3.4-4.2-13.7-4.7-15.6c-0.4,1.1-5.7,13.8-6,14.7c-0.3,0.8-0.8,0.9-1.5,0.9c-0.8,0-1-0.5-1.2-1.2c-1.7-6.7-5.7-21.6-6-22.3  c-0.2-0.4-0.8-0.6-1.2-0.8c-0.4-0.1-0.9,0-1.5,0c-0.1-1-0.2-2-0.3-3c3.7,0,7.1,0,10.8,0c0,0.8,0.3,1.9-0.1,2.4  c-0.3,0.5-1.4,0.4-2.4,0.7c1.2,4.9,2.4,9.9,3.6,14.8C137.6,153.1,141,144.4,141.7,142.2z" />
      <path d="M87.4,152.6c0.1-3.3,0.2-11.4,0.1-12.4c0-1.3-0.6-2-1.9-2.1c-0.5-0.1-1-0.1-1.5-0.1c-1.1,0.2-1.3-0.4-1.3-1.3  c0-2,0.1-2.1,2-2c2.9,0.1,5.8,0.2,8.8,0.2c0.9,0,1.5,0.3,1.8,1.2c0.3,1-0.2,1.5-1.2,1.6c-0.2,0-0.5,0-0.7,0c-1.7,0-2.3,0.6-2.4,2.3  c-0.1,2.7-0.6,18-0.7,20.2c0,0.4-0.3,1.2-0.5,1.2c-0.6,0.1-1.4,0.1-1.8-0.2c-1.3-1.2-15.2-16.2-17-18.3c-0.1,0.4-0.1,9.6,0,14  c0,1.5,0.2,1.6,1.7,1.8c0.8,0.1,1.6,0.1,2.4,0.2c0.6,2.3,0.3,2.9-2,2.9c-2.7,0-5.5-0.1-8.2-0.2c-1.4,0-2.1-1.4-1.3-2.7  c0.1-0.2,0.5-0.3,0.7-0.3c0.8,0,1.7-0.1,2.5,0c0.8,0,1.1-0.3,1.1-1.1c0-3.2,0-14.2,0-16.6c0-1.9-1.3-3.2-3.2-3.1  c-1.3,0-1.2-0.9-1.4-1.6c-0.2-1.3-0.1-1.4,1.2-1.4c2,0,4,0,5.9,0.1c0.9,0,1.6,0.4,2.2,1.2C74,137.5,86.2,151.2,87.4,152.6z" />
      <path d="M182,35c-4.6-0.9-8.7-2.9-12.4-5.7c-0.1,0-0.1-0.1-0.2-0.1c-1.1-0.9-2.4-1.6-3.4-2.6c-1.4-1.5-2.9-3-4.4-4.4  c-0.7-0.7-0.2-3.2,0-3.9c-1.1-1.1-2.3-2.5-3.6-3.9c2-2.2,3.9-4.4,5.9-6.6c-0.1-0.1-0.3-0.3-0.4-0.4c-2.1,2.3-4.1,4.5-6.2,6.8  c-1.1-1-2-1.7-2.8-2.5c-0.6-0.6-1.2-0.8-2-0.7C151.3,11,150,11,149,9.9c-0.7-0.7-3.2-1.7-4.1-0.9c-0.6,0.6-1.3,1.3-1.9,1.9  c-0.1,0,0.3-3,0.5-4.1c-0.3-0.3-3.5-4.9-4.2-5.5c-1.3-1.3-2.1-1.3-3.4,0c-2.8,2.9-5.6,5.7-8.4,8.7c-1,1-1.8,2.2-2.7,3.2  c1.3,1.4,2.7,2.5,3.7,3.8c1.4,1.9,3.1,2.5,5.3,1.6c0.4-0.1,0.7-0.4,1.2-0.8c0.4,0.2,1,0.6,1.9,1.1c-2.8,0.9-3.9,1.8-3.6,3.1  c0.2,0.7,2.4,2.1,3.1,2.2c-0.1,0.4-0.6,1-0.4,1.3c0.1,0.1-24.8,27-24.8,27c-1.7-1.5-22.6-25.3-23.5-26.3c0.9-1.1,1.7-2.1,2.5-3.2  c0.7-0.9,0.6-1.8-0.2-2.6c-0.7-0.7-1.4-1.4-1.9-1.9c1.2,0,2.5,0,3.8,0c1.1,0,2.3,0.1,3.1-1c0.4-0.6,3.3-4.4,3.6-4.8  c-0.4-0.5-0.9-1.2-1.5-1.7C95.5,9.6,87,1.9,86.8,1.2c-1.8,0.2-6.9,5-6.7,5.6c0.4,1.4,0.6,2.9,0.9,4.5c-1.2-0.9-1.8-2.2-3.5-2.2  c-0.7,0-1.4-0.2-1.9,0.4c-1.2,1.3-2.7,1.9-4.6,1.7c-0.5-0.1-1.1,0.2-1.5,0.6c-1,0.8-1.9,1.6-2.9,2.5c-0.5-0.5-7.3-7.2-7.7-7.6  c0,0-0.1,0.1-0.1,0.1c0.4,0.5,7,7.2,7.4,7.7c-1,1.1-1.9,2.1-3,3.1c-0.8,0.7-0.9,1.4-0.5,2.3c0.2,0.3,0.4,1.6,0.3,1.8  c-1.5,1.7-8.7,8-10.7,9.7c0.5,0.7,1.1,1.4,1.7,2.1c-0.1,0.1-3.9-1.1-4.7-0.7c-4,1.9-8.1,3.4-12.9,2.8c9.5,16.6,22,30.5,36.4,43  c0-0.6,0-1,0-1.4c0-2.8-0.1-5.6-0.1-8.4c0-3.2,0.1-6.3,0.1-9.5c0-0.7-3.2-12.7-1.2-16.6c0.3-0.6,3.9-5,5.1-6.3  c0.5-0.5,1-0.6,1.6-0.2c0.5,0.4,23,22.9,24.2,24c0.7,0.7,1.1,1.3,1.1,2c0,0-83.6,81.8-84.1,82.3c-2.1,2.1-4.1,4.4-6.1,6.6  c-1.1,1.2-2.3,2.3-3.1,3.7c-0.9,1.5-9.9,26.1-10,27.6c0.1-0.1,0.2-0.2,0.3-0.3c3.6-3.9,7.5-7.6,11.5-11.2  c0.9-0.8,133.9-133.7,133.9-133.7c0.7-0.2,1.3-0.3,2-0.3c1.9-0.1,5.7,6.2,6.1,7.6c1.3,4.2,1.2,8.1-1.9,11.4c-0.8,0.8-1,17.9-1,21.2  c0,0.2,0.1,0.3,0.1,0.5c1.4-1.1,11.4-10.5,15.1-14.2c0.5-0.5,0-4.8,0-4.9c0.7,0.8,1.4,1.6,2.1,2.4c1.5-1.7,3-3.3,4.4-5  c0.1-0.2,13.9-19.5,14.6-20.8C187.2,35.4,183.5,35.3,182,35z" />
      <path d="M215.4,158.7" />
    </svg>
  )
}

export const ContainerDiv = styled.div`
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  width: 100rem;
  height: 55rem;
  color: white;
  padding: 3.2rem 4.8rem;
  text-transform: uppercase;

  button {
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`
export const SeparatorDiv = styled.div`
  width: 2.5rem;
  content: '';
  height: 1px;
  background-color: red;
  transform: rotate(90deg);
`
export const DirectoryDiv = styled.div`
  svg {
    width: auto;
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    width: auto;
  }

  input {
    width: 40%;
    margin-right: 0.8rem;
    background-color: transparent;
  }
`

export const SaveButton = styled.button`
  background-color: #fdf063;
  border: 0;
  border-radius: 0.32rem;
  padding: 0.5rem 1rem;
  margin-left: 0.6rem;
  color: black;
`

export const IconButton = styled.button<{ marginRight?: string }>`
  background-color: black;
  width: fit-content;
  padding: 0.4rem;
  margin-right: ${({ marginRight }) => marginRight};
  color: white;
`
export const AxeDiv = styled.div`
  span {
    font-size: 1.4rem;
  }
`

export const AxeSpan = styled.span`
  color: #fdf063;
  letter-spacing: 0.3rem;
`

export const SeparatorHorizontal = styled.div`
  width: 100%;
  content: '';
  height: 1px;
  background-color: red;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
export const PointsDiv = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`

export const PointsSpanName = styled.span`
  font-size: 1rem;
  margin-right: 0.7rem;
`
export const PointsSpanValue = styled.span`
  font-size: 2.2rem;
  color: #fdf063;
`
export const PointsInput = styled.input`
  width: 4.5rem;
  margin-right: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 0.3rem 0.6rem;
  font-size: 1.4rem;
`
export const PointsSpanStr = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.3rem;
`
export const ItemsDiv = styled.div`
  span {
    font-size: 1.4rem;
  }
  width: 45%;
  height: 60%;
  display: flex;
  flex-direction: column;
`
export const WeaponsDiv = styled.div`
  span {
    font-size: 1.4rem;
  }
  -webkit-box-align: center;
  justify-content: space-between;
`
export const ShieldButton = styled.button`
  img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    height: 5rem;
    width: 5rem;
    object-fit: fill;
    border-radius: 50%;
    border-color: lightgray;
    background-color: darkgray;
  }
  height: 5.3rem;
  width: 5.3rem;
  border-radius: 50%;
  border: 2px solid #5a5a5a;
`

export const WeaponButton = styled.button<{
  borderColor: string
  backgroundColor: string
  gradientColor: string
}>`
  height: 5rem;
  width: 13.5rem;
  border: 2px solid #ba2edd;

  background-image: ${({ backgroundColor, gradientColor }) =>
    `linear-gradient(to top left, ${backgroundColor} 0%, ${gradientColor} 100%)`};
  background-image: ${({ backgroundColor, gradientColor }) =>
    `linear-gradient(top left, ${backgroundColor} 0%, ${gradientColor} 100%)`};

  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const GemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WeaponGemDiv = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;
`

export const WeaponSpan = styled.span`
  height: 50%;
  margin-right: 1rem;
  text-align: center;
  align-items: center;
  display: flex;
`
