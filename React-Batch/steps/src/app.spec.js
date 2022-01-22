import ChildComp from './app';
 
describe("Testing for User Name", ()=>{
    let app = null;
 
    beforeEach(()=>{
        app = new ChildComp();
        console.log("BeforeEach was called");
    });
 
    test("Should check for username to be batman", ()=>{
        expect(app.state.username).toBe("Batman");
    })
 
    test("Should check for userpower to be defined", ()=>{
        expect(app.state.userpower).toBeDefined();
    })
 
    afterEach(()=>{
        console.log("AfterEach was called");
    });
 
 
 
})
 
 
 