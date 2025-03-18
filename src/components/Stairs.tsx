import {motion} from "framer-motion"

// variants
const stairAnimation = {
    inital : {
        top : "0%"
    },
    animate : {
        top : "100%"
    },
    exit : {
        top : ["100%", "0%"]
    }
}




// calculate the reverse index of fot staggered delay
const reverseIndex = (index : number) : number => {
    const totalSteps = 6;
    return totalSteps - index - 1
}

export default function Stairs() {
    return (
        <>
            {/* Render 6 motion divs, each representing a step of the stairs
                each div will have the same animation defined by the stairsAnimation object,
                the delay for each div is calculated dinamically based on it's reversed index
                creating a staggered effect  with decreasing delay for each step
            */}
            {[...Array(6)].map((_, index) => {
                return ( 
                    <motion.div 
                    key={index}
                    variants={stairAnimation} 
                    initial="inital" 
                    animate="animate" 
                    exit="exit"
                    transition={{
                        duration : 0.3,
                        ease : "easeInOut",
                        delay : reverseIndex(index) * 0.1
                    }}
                    className="h-full w-full bg-white relative">
                </motion.div>
                )
            })}
        </>        
    )
}