
package juegogato;


public class TableroGanador {
    
    private int[][] tablero;

    /**
     * Constructor
     */
    public TableroGanador() {
    }
 
    /**
     * Recibe un tablero ganador
     * @param tablero 
     */
    
    public void setTablero(int[][] tablero){
        this.tablero = tablero;
    }
    
    /**
     * 
     * @return un tablero ganador
     */
    public int[][] getTablero(){
        return this.tablero;
    }
    
}
