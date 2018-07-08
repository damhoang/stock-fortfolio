DROP TABLE Position;
CREATE TABLE [dbo].[Position] (
    [Id]         INT          IdENTITY (1, 1) NOT NULL,
    [Symbol]     NCHAR (10)   NULL,
    [Company]    NCHAR (100)  NULL,
    [Type]       NCHAR (10)   NULL,
    [Quantity]   INT          NULL,
    [EntryDate]    DATETIME     NULL,
    [ExitDate]   DATETIME     NULL,
    [EntryPrice]   DECIMAL (18) NULL,
    [ExitPrice]  DECIMAL (18) NULL,
    [Commission] DECIMAL (18) NULL,
    [Profit]     DECIMAL (18) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);



/* SET IdENTITY_INSERT [dbo].[[Position]] ON */
DBCC CHECKIdENT ('[Position]', RESEED, 0)
GO
DELETE from [dbo].[Position];
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('MU', 'Micron', 'Stock', 100, '06/12/2018', '07/06/2018', 65.50, 70.67, 20.00, 100.00)
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('MA', 'Mastercard', 'Stock', 100, '06/12/2018', '07/06/2018', 65.50, 50.67, 20.00, 100.00)
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('ORCL', 'Oracle', 'Stock', 100, '06/12/2018', '07/06/2018', 85.50, 90.67, 20.00, 100.00)
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('TXN', 'Texas Instrument', 'Stock', 100, '06/12/2018', '07/06/2018', 165.50, 135.67, 20.00, 100.00)
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('MOMO', 'Momo technology', 'Stock', 100, '06/12/2018', '07/06/2018', 55.50, 67.67, 20.00, 100.00)
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('INTC', 'Intel', 'Stock', 100, '06/12/2018', '07/06/2018', 165.50, 170.67, 20.00, 100.00)
INSERT INTO [dbo].[Position] ([Symbol], [Company], [Type], [Quantity], [EntryDate], [ExitDate], [EntryPrice], [ExitPrice], [Commission], [Profit]) 
VALUES ('COST', 'Costco', 'Stock', 100, '06/12/2018', '07/06/2018', 265.50, 270.67, 20.00, 100.00)